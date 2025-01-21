import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo43Component } from './lib29-demo43.component';

describe('Lib29Demo43Component', () => {
  let component: Lib29Demo43Component;
  let fixture: ComponentFixture<Lib29Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
