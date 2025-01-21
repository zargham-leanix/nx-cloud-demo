import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo23Component } from './lib1-demo23.component';

describe('Lib1Demo23Component', () => {
  let component: Lib1Demo23Component;
  let fixture: ComponentFixture<Lib1Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
