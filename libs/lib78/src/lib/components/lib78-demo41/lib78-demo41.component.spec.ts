import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo41Component } from './lib78-demo41.component';

describe('Lib78Demo41Component', () => {
  let component: Lib78Demo41Component;
  let fixture: ComponentFixture<Lib78Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
