import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo12Component } from './lib63-demo12.component';

describe('Lib63Demo12Component', () => {
  let component: Lib63Demo12Component;
  let fixture: ComponentFixture<Lib63Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
