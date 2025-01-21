import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo30Component } from './lib43-demo30.component';

describe('Lib43Demo30Component', () => {
  let component: Lib43Demo30Component;
  let fixture: ComponentFixture<Lib43Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
