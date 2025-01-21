import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo41Component } from './lib14-demo41.component';

describe('Lib14Demo41Component', () => {
  let component: Lib14Demo41Component;
  let fixture: ComponentFixture<Lib14Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
