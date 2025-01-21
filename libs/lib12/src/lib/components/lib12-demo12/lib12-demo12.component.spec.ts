import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo12Component } from './lib12-demo12.component';

describe('Lib12Demo12Component', () => {
  let component: Lib12Demo12Component;
  let fixture: ComponentFixture<Lib12Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
