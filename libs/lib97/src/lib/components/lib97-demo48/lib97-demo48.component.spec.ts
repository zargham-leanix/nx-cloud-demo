import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo48Component } from './lib97-demo48.component';

describe('Lib97Demo48Component', () => {
  let component: Lib97Demo48Component;
  let fixture: ComponentFixture<Lib97Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
