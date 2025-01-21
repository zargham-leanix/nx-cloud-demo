import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo20Component } from './lib92-demo20.component';

describe('Lib92Demo20Component', () => {
  let component: Lib92Demo20Component;
  let fixture: ComponentFixture<Lib92Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
