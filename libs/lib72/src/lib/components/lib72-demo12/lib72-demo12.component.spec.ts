import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo12Component } from './lib72-demo12.component';

describe('Lib72Demo12Component', () => {
  let component: Lib72Demo12Component;
  let fixture: ComponentFixture<Lib72Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
