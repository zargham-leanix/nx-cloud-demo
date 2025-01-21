import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo13Component } from './lib92-demo13.component';

describe('Lib92Demo13Component', () => {
  let component: Lib92Demo13Component;
  let fixture: ComponentFixture<Lib92Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
