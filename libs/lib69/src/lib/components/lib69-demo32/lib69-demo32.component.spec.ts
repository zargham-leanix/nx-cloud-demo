import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo32Component } from './lib69-demo32.component';

describe('Lib69Demo32Component', () => {
  let component: Lib69Demo32Component;
  let fixture: ComponentFixture<Lib69Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
