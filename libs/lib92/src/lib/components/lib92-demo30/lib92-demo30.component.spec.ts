import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo30Component } from './lib92-demo30.component';

describe('Lib92Demo30Component', () => {
  let component: Lib92Demo30Component;
  let fixture: ComponentFixture<Lib92Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
