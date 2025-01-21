import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo44Component } from './lib92-demo44.component';

describe('Lib92Demo44Component', () => {
  let component: Lib92Demo44Component;
  let fixture: ComponentFixture<Lib92Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
