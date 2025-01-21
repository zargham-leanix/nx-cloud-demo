import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo4Component } from './lib92-demo4.component';

describe('Lib92Demo4Component', () => {
  let component: Lib92Demo4Component;
  let fixture: ComponentFixture<Lib92Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
