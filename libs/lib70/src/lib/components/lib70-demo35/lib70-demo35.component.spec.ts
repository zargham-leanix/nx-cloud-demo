import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo35Component } from './lib70-demo35.component';

describe('Lib70Demo35Component', () => {
  let component: Lib70Demo35Component;
  let fixture: ComponentFixture<Lib70Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
