import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo8Component } from './lib28-demo8.component';

describe('Lib28Demo8Component', () => {
  let component: Lib28Demo8Component;
  let fixture: ComponentFixture<Lib28Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
