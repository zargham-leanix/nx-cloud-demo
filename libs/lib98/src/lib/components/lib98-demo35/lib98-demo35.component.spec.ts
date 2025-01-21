import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo35Component } from './lib98-demo35.component';

describe('Lib98Demo35Component', () => {
  let component: Lib98Demo35Component;
  let fixture: ComponentFixture<Lib98Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
