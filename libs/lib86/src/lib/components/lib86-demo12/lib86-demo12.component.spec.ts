import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo12Component } from './lib86-demo12.component';

describe('Lib86Demo12Component', () => {
  let component: Lib86Demo12Component;
  let fixture: ComponentFixture<Lib86Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
