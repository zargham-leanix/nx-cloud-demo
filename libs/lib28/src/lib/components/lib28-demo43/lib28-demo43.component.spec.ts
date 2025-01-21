import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo43Component } from './lib28-demo43.component';

describe('Lib28Demo43Component', () => {
  let component: Lib28Demo43Component;
  let fixture: ComponentFixture<Lib28Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
