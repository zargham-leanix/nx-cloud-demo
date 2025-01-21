import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo49Component } from './lib69-demo49.component';

describe('Lib69Demo49Component', () => {
  let component: Lib69Demo49Component;
  let fixture: ComponentFixture<Lib69Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
