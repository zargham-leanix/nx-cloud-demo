import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo35Component } from './lib97-demo35.component';

describe('Lib97Demo35Component', () => {
  let component: Lib97Demo35Component;
  let fixture: ComponentFixture<Lib97Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
