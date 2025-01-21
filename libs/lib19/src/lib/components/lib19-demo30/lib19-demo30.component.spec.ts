import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo30Component } from './lib19-demo30.component';

describe('Lib19Demo30Component', () => {
  let component: Lib19Demo30Component;
  let fixture: ComponentFixture<Lib19Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
