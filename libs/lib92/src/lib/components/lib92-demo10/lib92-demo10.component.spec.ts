import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo10Component } from './lib92-demo10.component';

describe('Lib92Demo10Component', () => {
  let component: Lib92Demo10Component;
  let fixture: ComponentFixture<Lib92Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
