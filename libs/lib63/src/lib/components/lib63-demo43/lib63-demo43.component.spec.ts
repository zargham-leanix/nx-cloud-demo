import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo43Component } from './lib63-demo43.component';

describe('Lib63Demo43Component', () => {
  let component: Lib63Demo43Component;
  let fixture: ComponentFixture<Lib63Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
