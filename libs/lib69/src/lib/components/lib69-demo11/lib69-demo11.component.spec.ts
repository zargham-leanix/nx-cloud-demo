import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo11Component } from './lib69-demo11.component';

describe('Lib69Demo11Component', () => {
  let component: Lib69Demo11Component;
  let fixture: ComponentFixture<Lib69Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
