import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo30Component } from './lib83-demo30.component';

describe('Lib83Demo30Component', () => {
  let component: Lib83Demo30Component;
  let fixture: ComponentFixture<Lib83Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
