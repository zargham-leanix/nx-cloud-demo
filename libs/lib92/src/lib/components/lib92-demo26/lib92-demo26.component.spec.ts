import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo26Component } from './lib92-demo26.component';

describe('Lib92Demo26Component', () => {
  let component: Lib92Demo26Component;
  let fixture: ComponentFixture<Lib92Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
