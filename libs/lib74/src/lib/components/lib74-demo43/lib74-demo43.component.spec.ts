import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo43Component } from './lib74-demo43.component';

describe('Lib74Demo43Component', () => {
  let component: Lib74Demo43Component;
  let fixture: ComponentFixture<Lib74Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
