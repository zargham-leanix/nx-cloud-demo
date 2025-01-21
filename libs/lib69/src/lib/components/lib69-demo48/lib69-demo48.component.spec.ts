import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo48Component } from './lib69-demo48.component';

describe('Lib69Demo48Component', () => {
  let component: Lib69Demo48Component;
  let fixture: ComponentFixture<Lib69Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
