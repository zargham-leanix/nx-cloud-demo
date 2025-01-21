import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo42Component } from './lib74-demo42.component';

describe('Lib74Demo42Component', () => {
  let component: Lib74Demo42Component;
  let fixture: ComponentFixture<Lib74Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
