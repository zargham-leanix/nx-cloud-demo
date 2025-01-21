import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo41Component } from './lib92-demo41.component';

describe('Lib92Demo41Component', () => {
  let component: Lib92Demo41Component;
  let fixture: ComponentFixture<Lib92Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
