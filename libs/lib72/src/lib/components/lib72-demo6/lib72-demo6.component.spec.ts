import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo6Component } from './lib72-demo6.component';

describe('Lib72Demo6Component', () => {
  let component: Lib72Demo6Component;
  let fixture: ComponentFixture<Lib72Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
