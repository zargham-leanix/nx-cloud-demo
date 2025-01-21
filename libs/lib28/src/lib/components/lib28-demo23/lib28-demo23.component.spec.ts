import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo23Component } from './lib28-demo23.component';

describe('Lib28Demo23Component', () => {
  let component: Lib28Demo23Component;
  let fixture: ComponentFixture<Lib28Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
