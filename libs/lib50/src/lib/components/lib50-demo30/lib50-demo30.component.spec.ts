import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo30Component } from './lib50-demo30.component';

describe('Lib50Demo30Component', () => {
  let component: Lib50Demo30Component;
  let fixture: ComponentFixture<Lib50Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
