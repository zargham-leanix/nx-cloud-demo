import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo10Component } from './lib28-demo10.component';

describe('Lib28Demo10Component', () => {
  let component: Lib28Demo10Component;
  let fixture: ComponentFixture<Lib28Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
