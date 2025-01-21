import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo23Component } from './lib92-demo23.component';

describe('Lib92Demo23Component', () => {
  let component: Lib92Demo23Component;
  let fixture: ComponentFixture<Lib92Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
