import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo12Component } from './lib21-demo12.component';

describe('Lib21Demo12Component', () => {
  let component: Lib21Demo12Component;
  let fixture: ComponentFixture<Lib21Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
