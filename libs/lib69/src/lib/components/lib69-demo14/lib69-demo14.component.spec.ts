import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo14Component } from './lib69-demo14.component';

describe('Lib69Demo14Component', () => {
  let component: Lib69Demo14Component;
  let fixture: ComponentFixture<Lib69Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
