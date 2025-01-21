import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo48Component } from './lib92-demo48.component';

describe('Lib92Demo48Component', () => {
  let component: Lib92Demo48Component;
  let fixture: ComponentFixture<Lib92Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
