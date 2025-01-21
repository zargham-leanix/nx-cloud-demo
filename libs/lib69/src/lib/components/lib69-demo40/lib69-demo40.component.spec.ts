import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo40Component } from './lib69-demo40.component';

describe('Lib69Demo40Component', () => {
  let component: Lib69Demo40Component;
  let fixture: ComponentFixture<Lib69Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
