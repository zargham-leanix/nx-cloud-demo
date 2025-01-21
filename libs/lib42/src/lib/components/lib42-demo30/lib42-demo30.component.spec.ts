import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo30Component } from './lib42-demo30.component';

describe('Lib42Demo30Component', () => {
  let component: Lib42Demo30Component;
  let fixture: ComponentFixture<Lib42Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
