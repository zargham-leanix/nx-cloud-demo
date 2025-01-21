import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo48Component } from './lib45-demo48.component';

describe('Lib45Demo48Component', () => {
  let component: Lib45Demo48Component;
  let fixture: ComponentFixture<Lib45Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
