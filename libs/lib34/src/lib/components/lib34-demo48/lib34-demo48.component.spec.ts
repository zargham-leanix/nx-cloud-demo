import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo48Component } from './lib34-demo48.component';

describe('Lib34Demo48Component', () => {
  let component: Lib34Demo48Component;
  let fixture: ComponentFixture<Lib34Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
