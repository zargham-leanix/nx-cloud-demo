import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo30Component } from './lib62-demo30.component';

describe('Lib62Demo30Component', () => {
  let component: Lib62Demo30Component;
  let fixture: ComponentFixture<Lib62Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
