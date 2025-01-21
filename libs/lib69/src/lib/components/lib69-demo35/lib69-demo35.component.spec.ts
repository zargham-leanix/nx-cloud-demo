import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo35Component } from './lib69-demo35.component';

describe('Lib69Demo35Component', () => {
  let component: Lib69Demo35Component;
  let fixture: ComponentFixture<Lib69Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
