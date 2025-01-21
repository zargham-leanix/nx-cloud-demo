import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo41Component } from './lib52-demo41.component';

describe('Lib52Demo41Component', () => {
  let component: Lib52Demo41Component;
  let fixture: ComponentFixture<Lib52Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
