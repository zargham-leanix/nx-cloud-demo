import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo12Component } from './lib74-demo12.component';

describe('Lib74Demo12Component', () => {
  let component: Lib74Demo12Component;
  let fixture: ComponentFixture<Lib74Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
