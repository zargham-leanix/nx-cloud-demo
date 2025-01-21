import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo48Component } from './lib14-demo48.component';

describe('Lib14Demo48Component', () => {
  let component: Lib14Demo48Component;
  let fixture: ComponentFixture<Lib14Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
