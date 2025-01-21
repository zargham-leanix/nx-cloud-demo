import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo35Component } from './lib92-demo35.component';

describe('Lib92Demo35Component', () => {
  let component: Lib92Demo35Component;
  let fixture: ComponentFixture<Lib92Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
