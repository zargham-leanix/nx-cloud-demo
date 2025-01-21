import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo10Component } from './lib95-demo10.component';

describe('Lib95Demo10Component', () => {
  let component: Lib95Demo10Component;
  let fixture: ComponentFixture<Lib95Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
