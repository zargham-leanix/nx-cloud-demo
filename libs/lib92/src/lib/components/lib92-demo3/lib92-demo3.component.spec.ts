import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo3Component } from './lib92-demo3.component';

describe('Lib92Demo3Component', () => {
  let component: Lib92Demo3Component;
  let fixture: ComponentFixture<Lib92Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
