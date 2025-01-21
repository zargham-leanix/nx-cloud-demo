import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo41Component } from './lib53-demo41.component';

describe('Lib53Demo41Component', () => {
  let component: Lib53Demo41Component;
  let fixture: ComponentFixture<Lib53Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
