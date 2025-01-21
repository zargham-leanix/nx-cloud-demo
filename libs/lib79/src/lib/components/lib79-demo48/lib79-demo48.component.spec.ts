import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo48Component } from './lib79-demo48.component';

describe('Lib79Demo48Component', () => {
  let component: Lib79Demo48Component;
  let fixture: ComponentFixture<Lib79Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
